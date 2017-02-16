import $ from 'jquery';
import config from './config.json'
import css from './default.css';

$.get(config.url)
  .then(
    (data) => data.list
                  .map(p => $(`<tr><td>${p.name}</td><td>${p.email}</td></tr>`))
                  .forEach(ele => $(config.selector).append(ele)
  )
);