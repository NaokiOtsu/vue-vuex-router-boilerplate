import path from 'path';

const is_production = process.env.NODE_ENV === 'production';
const root_path = path.resolve(__dirname, '../../');

const public_root_path = root_path + '/public';
const src_root_path = root_path + '/frontend/src';

const src_path = {
  sprites     : src_root_path + '/images/sprites',
  images      : src_root_path + '/images',
  stylesheets : src_root_path + '/stylesheets',
  javascripts : src_root_path + '/javascripts'
};

const public_path = {
  sprites     : public_root_path + '/images',
  images      : public_root_path + '/images',
  stylesheets : public_root_path + '/stylesheets',
  javascripts : public_root_path + '/javascripts'
};

module.exports = {
  public_root_path : public_root_path,
  is_production : is_production,
  public_path   : public_path,
  src_path      : src_path
};
