import path from 'path';

const is_production = process.env.NODE_ENV === 'production';
const public_path   = path.resolve(__dirname, 'public');
const src_path      = path.resolve(__dirname, 'src');

module.exports = {
  is_production : is_production,
  public_path   : public_path,
  src_path      : src_path
};
