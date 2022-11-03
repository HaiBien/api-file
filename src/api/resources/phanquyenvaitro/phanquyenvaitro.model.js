import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;

const trangSchema = new Schema({ 
  trang: {type: String},
  tentrang: {type: String},
  xem: {type: Boolean, default: false},
  them: {type: Boolean, default: false},
  sua: {type: Boolean, default: false},
  xoa: {type: Boolean, default: false}
 });

const phanquyenvaitroSchema = new Schema({
  tenvaitro: {type: String},
  is_deleted: {type: Boolean, default: false},
  vaitro: {}
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'phanquyenvaitro'
});
phanquyenvaitroSchema.plugin(mongoosePaginate);
export default mongoose.model('PhanQuyenVaiTro', phanquyenvaitroSchema);
