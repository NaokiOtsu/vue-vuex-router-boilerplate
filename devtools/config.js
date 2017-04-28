import path from 'path';

const is_production = process.env.NODE_ENV === 'production';

const ROOT_PATH   = path.resolve(__dirname, '../');
const SRC_PATH    = ROOT_PATH + '/src';
const DEST_PATH   = ROOT_PATH + '/dest';
const PUBLIC_PATH = ROOT_PATH + '/public';

module.exports = {
  is_production  : is_production,
  DEST_PATH      : DEST_PATH,
  SRC_PATH       : SRC_PATH,
  PUBLIC_PATH    : PUBLIC_PATH
};
