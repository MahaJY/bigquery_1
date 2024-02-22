require('dotenv').config();
const { BigQuery } = require('@google-cloud/bigquery');
const bigquery = new BigQuery();
const getbycampaignid = async (req, res) => {
  try {
    const Campaign_ID = req.params.Campaign_ID
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\` where Campaign_ID = '${Campaign_ID}' LIMIT 1000`;
    const options = {
      query: query,
      location: 'US',
    };
    const [rows] = await bigquery.query(options);
    console.log('Rows:');
    if (rows.length === 0) {
      console.log('No data found');
      res.send('no data found');
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
  }
}
const getbyProduct_Name = async (req, res) => {
  try {
    const Product_Name = req.params.Product_Name
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\` where Product_Name= '${Product_Name}' LIMIT 1000`;
    const options = {
      query: query,
      location: 'US',
    };
    const [rows] = await bigquery.query(options);
    console.log('Rows:');
    if (rows.length === 0) {
      console.log('No data found');
      res.send('no data found');
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
  }
}
const getbyFSN_ID = async (req, res) => {
  try {
    const FSN_ID = req.params.FSN_ID
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\` where FSN_ID = '${FSN_ID}' LIMIT 1000`;
    const options = {
      query: query,
      location: 'US',
    };
    const [rows] = await bigquery.query(options);
    console.log('Rows:');
    if (rows.length === 0) {
      console.log('No data found');
      res.send('no data found');
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
  }
}
const getbyAd_Group_ID = async (req, res) => {
  try {
    const Ad_Group_ID = req.params.Ad_Group_ID
    const query = `SELECT * FROM \`gmail-api-test-415008.barathdata.sampledata\` where Ad_Group_ID = '${Ad_Group_ID}' LIMIT 1000`;
    const options = {
      query: query,
      location: 'US',
    };
    const [rows] = await bigquery.query(options);
    console.log('Rows:');
    if (rows.length === 0) {
      console.log('No data found');
      res.send('no data found');
  } else {
      rows.forEach(row => console.log(row));
      res.json(rows);
  }
  } catch (err) {
    console.error('ERROR:', err);
  }
}
module.exports={getbycampaignid,getbyProduct_Name,getbyFSN_ID,getbyAd_Group_ID};