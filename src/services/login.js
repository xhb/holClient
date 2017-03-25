/*
* @Author: xhb
* @Date:   2017-03-25 15:38:59
* @Last Modified by:   xhb
* @Last Modified time: 2017-03-25 16:27:07
*/

import request from '../utils/request';
import qs from 'qs';

export function auth(params) {
  return request(`/api/authenticate?${qs.stringify(params)}`);
}

