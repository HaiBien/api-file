import request from "request";

const convert = require('xml-js');

export async function sendSMS(dienthoai, noidung, user) {
  return new Promise(async function (resolve, reject) {
    try {

      let xml =
          `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:impl="http://impl.bulkSms.ws/">
           <soapenv:Header/>
           <soapenv:Body>
              <impl:wsCpMt>
                 <!--Optional:-->
                 <User>smsbrand_bvpshp</User>
                 <!--Optional:-->
                 <Password>Hpg@2021</Password>
                 <!--Optional:-->
                 <CPCode>BVPSHP</CPCode>
                 <!--Optional:-->
                 <RequestID>1</RequestID>
                 <!--Optional:-->
                 <UserID>${dienthoai}</UserID>
                 <!--Optional:-->
                 <ReceiverID>${dienthoai}</ReceiverID>
                 <!--Optional:-->
                 <ServiceID>BVPSHP</ServiceID>
                 <!--Optional:-->
                 <CommandCode>bulksms</CommandCode>
                 <!--Optional:-->
                 <Content>${noidung}</Content>
                 <!--Optional:-->
                 <ContentType>1</ContentType>
              </impl:wsCpMt>
           </soapenv:Body>
        </soapenv:Envelope>`


      let options = {
        url: 'http://ams.tinnhanthuonghieu.vn:8009/bulkapi?wsdl',
        method: 'POST',
        body: xml,
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
          'Accept-Encoding': 'gzip,deflate',
          'Content-Length': xml.length,
           Connection: 'keep-alive',
          gzip: true,
          'Transfer-Encoding': 'chunked'
        },
      };

      let data = await sendSMSToNumberPhong(options, noidung, user)
      if(data.code === 'ErrorRequest'){
        let dataSentAgain = await sendSMSToNumberPhong(options, noidung, user)
        resolve(dataSentAgain)
      }else{
        resolve(data)
      }
    } catch (e) {
      resolve({success: false, trangthai: 0, code: 'Error', message: 'L???i kh??ng x??c ?????nh', noidung: noidung, ...user})
    }
  })
}

async function sendSMSToNumberPhong(options, noidung, user) {
  return new Promise(function (resolve, reject) {
    request(options, async function (error, res, body) {
      if (error) {
        resolve({
          success: false,
          trangthai: 0,
          code: 'ErrorRequest',
          message: error.message ? error.message : 'L???i kh??ng x??c ?????nh',
          noidung: noidung, ...user
        })
      } else {
        if (body) {
          let jsonResult = convert.xml2js(body, {compact: true, spaces: 4});
          let data = jsonResult['S:Envelope']['S:Body'] && jsonResult['S:Envelope']['S:Body']['ns2:wsCpMtResponse'] ? jsonResult['S:Envelope']['S:Body']['ns2:wsCpMtResponse']['return'] : null
          let data1 = jsonResult['S:Envelope']['S:Body'] && jsonResult['S:Envelope']['S:Body']['S:Fault'] ? jsonResult['S:Envelope']['S:Body']['S:Fault'] : null

          if(data1){
            let codeError = data1['faultcode']['_text'];
            let result = data1['faultstring']['_text'];
            resolve({success: false, trangthai: 0, code: codeError, message: result, noidung: noidung, ...user})
          }

          if (!data) resolve({
            success: false,
            trangthai: 0,
            code: 'Error',
            message: 'L???i kh??ng x??c ?????nh',
            noidung: noidung, ...user
          })
          else {
            let codeError = data['message']['_text']
            let result = data['result']['_text']

            if (result === '1') {
              resolve({success: true, trangthai: 1, code: '', message: '', noidung: noidung, ...user})
            }
            let message = 'L???i kh??ng x??c ?????nh'
            if (codeError === 'Authenticate: Cp_code: NULL_OR_BLANK') message = 'Thi???u th??ng tin cp_code'
            else if (codeError === 'Authenticate: UserName: NULL_OR_BLANK') message = 'Thi???u th??ng tin user_name'
            else if (codeError === 'Authenticate: UserName: NULL_OR_BLANK') message = 'Thi???u th??ng tin user_name'
            else if (codeError === 'Authenticate: UserName: NULL_OR_BLANK') message = 'Thi???u th??ng tin user_name'
            else if (codeError === 'CP_CODE_NOT_FOUND') message = 'Th??ng tin cp_code kh??ng ch??nh x??c'
            else if (codeError === 'Authenticate: WRONG_INFORMATION_AUTHENTICATE') message = 'Th??ng tin user/pass kh??ng ch??nh x??c'

            else if (codeError === 'Authenticate: IP_INVALID (YOUR IP: XXXX)') message = 'IP XXXX c???a h??? th???ng b???n ??ang g???i tin ch??a ???????c ????ng k?? whitelist'
            else if (codeError === 'Check RequestID: NULL_OR_BLANK') message = 'Thi???u th??ng tin RequestID'
            else if (codeError === 'Check RequestID: REQUEST_ID_NOT_NUMBER') message = 'RequestID kh??ng ????ng'
            else if (codeError === 'Check UserID: NULL_OR_BLANK') message = 'Thi???u th??ng tin UserID'
            else if (codeError === 'Check ReceiverID: NULL_OR_BLANK') message = 'Thi???u th??ng tin ReceiverID'

            else if (codeError === 'Check ReceiverID: FORMAT_ERROR') message = 'ReceiverID kh??ng ????ng'
            else if (codeError === 'UserID_NOT_EQUAL_ReceiverID') message = 'UserID v?? ReceiverID ph???i gi???ng nhau'
            else if (codeError === 'Unable to check telco from input receiver') message = 'Kh??ng x??c ?????nh ???????c nh?? m???ng c???a thu?? bao (do ReceiverID sai)'
            else if (codeError === 'Length of ReceiverID is invalid') message = 'ReceiveID kh??ng ????ng (sai ????? d??i)'
            else if (codeError === 'Check ServiceID: DUPLICATE MESSAGE') message = 'Tin nh???n b??? l???p'

            else if (codeError === 'Check ServiceID: ALIAS_INVALID:TELCO=XX') message = 'Sai th????ng hi???u ho???c th????ng hi???u ch??a ???????c khai b??o cho nh?? m???ng t????ng ???ng v???i thu?? bao, XX l?? nh?? m???ng c???a thu?? bao (VT: Viettel, VN: Vinaphone, MB: Mobiphone, VM: Vietnammobile)'
            else if (codeError === 'Check CommandCode: NULL_OR_BLANK') message = 'Thi???u th??ng tin command_code'
            else if (codeError === 'Check CommandCode: COMMAND_CODE_ERROR') message = 'Sai command_code'
            else if (codeError === 'Check Content: NULL_OR_BLANK') message = 'Kh??ng c?? n???i dung tin nh???n'
            else if (codeError === 'Check Content: MAXLENGTH_LIMIT_XXXX_BYTE (YOUR_CONTENT: YY BYTE)') message = '????? d??i tin v?????t qu?? gi???i h???n (XXXX: s??? byte t???i ??a, YY l?? s??? byte n???i dung tin m?? b???n nh???p)'

            else if (codeError === 'Check Content: MSG_ERROR_CONTAIN_BLACKLIST') message = 'N???i dung ch???a t??? ng??? b??? ch???n'
            else if (codeError === 'Check information error') message = 'L???i chung h??? th???ng'
            else if (codeError === 'Check template: CONTENT_NOT_MATCH_TEMPLATE') message = 'L???i sai ?????nh d???ng m???u tin nh???n'

            resolve({success: false, trangthai: 0, code: codeError, message: message, noidung: noidung, ...user})
          }

        } else {
          resolve({
            success: false,
            trangthai: 0,
            code: 'Error',
            message: 'L???i kh??ng x??c ?????nh',
            noidung: noidung, ...user
          })
        }
      }
    });
  })
}