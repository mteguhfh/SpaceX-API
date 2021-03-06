
const limit = require('../../builders/limit');
const project = require('../../builders/project');

module.exports = {

  /**
   * Returns all rocket info
   */
  all: async ctx => {
    const data = await global.db
      .collection('ship')
      .find({})
      .project(project(ctx.request.query))
      .sort({ first_flight: 1 })
      .limit(limit(ctx.request.query))
      .toArray();
    ctx.body = data;
  },

  /**
   * Returns specific rocket info
   */
  specific: async ctx => {
    const data = await global.db
      .collection('ship')
      .find({ id: ctx.params.rocket })
      .project(project(ctx.request.query))
      .toArray();
    ctx.body = data[0];
  },

};
