/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

var path = require('path')
var ejs = require('ejs');
var puppeteer = require('puppeteer');

module.exports.makePdf = async function( filename, data ){
  const html = await ejs.renderFile(path.resolve(process.cwd() + '/pdf/' + filename), data)
  const pdf = await createPDF(html)
  return pdf
}

const createPDF = async function(html) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setContent(html)
  const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
          left: '0.7in',
          top: '0.7in',
          right: '0.7in',
          bottom: '0.7in'
      }
  })
  await browser.close()
  return buffer
}