function checkType(req, res, next) {
    //type check for ID
    if (typeof req.query.id !== "undefined") {
      var id = req.query.id;
      if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: "ID must be an integer" });
      }
    }
    //type check for dates
    if (
      typeof req.query.startDate !== "undefined" &&
      typeof req.query.endDate !== "undefined"
    ) {
      var startDate = new Date(req.query.startDate);
      var endDate = new Date(req.query.endDate);
      if (
        (startDate &&
          startDate.getTime &&
          !isNaN(startDate.getTime()) === false) ||
        (endDate && endDate.getTime && !isNaN(endDate.getTime()) === false)
      ) {
        res.status(400).send({
          success: "false",
          message: "invalid date format"
        });
      }
    } else if (typeof req.query.startDate !== "undefined") {
      var startDate = new Date(req.query.startDate);
      if (
        startDate &&
        startDate.getTime &&
        !isNaN(startDate.getTime()) === false
      ) {
        res.status(400).send({
          success: "false",
          message: "invalid start date format"
        });
      }
    } else if (typeof req.query.endDate !== "undefined") {
      var endDate = new Date(req.query.endDate);
      if (endDate && endDate.getTime && !isNaN(endDate.getTime()) === false) {
        res.status(400).send({
          success: "false",
          message: "invalid end date format"
        });
      }
    }
    next();
  }
  
  function filterByDate(date, req) {
    var startDate = req.query.startDate;
    var endDate = req.query.endDate;
    if (typeof startDate !== "undefined" && typeof endDate !== "undefined") {
      return date >= new Date(startDate) && new Date(date <= endDate);
    } else if (typeof startDate !== "undefined") {
      return date >= new Date(startDate);
    } else if (typeof endDate !== "undefined") {
      return date <= new Date(endDate);
    }
    return true;
  }
  
  module.exports = {
    checkType,
    filterByDate
  };
  