const db = require('../models/dbModels');

const budgetController = {
  checkBudget: async (req, res, next) => {
    const { user_id } = req.body;
    const sqlQuery = 'SELECT * FROM budget WHERE user_id = $1';
    try {
      const data = await db.query(sqlQuery, [user_id]);
      // to be updated
      console.log('data is: ', data);
      if (!data.rows[0]) return next('data does not exist');
      res.locals.budget = data.rows;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  createBudget: async (req, res, next) => {
    const {
      user_id,
      income,
      entertainment,
      food_and_drink,
      general_merchandise,
      transportation,
      travel,
      rent_and_utilities,
    } = req.body;

    const sqlQuery =
      'INSERT INTO budget (user_id, income, entertainment, food_and_drink, general_merchandise, transportation, travel, rent_and_utilities) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

      try {
      db.query(sqlQuery, [
        user_id,
        income,
        entertainment,
        food_and_drink,
        general_merchandise,
        transportation,
        travel,
        rent_and_utilities,
      ]);
      return next();
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = budgetController;
