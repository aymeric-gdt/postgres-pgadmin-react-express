const db = require('../db');

exports.getExample = async () => {
  const query = 'SELECT NOW() as current_time';
  const result = await db.query(query);
  return result.rows[0];
};
