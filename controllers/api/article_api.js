module.exports = function BookApiControllerModule(pb) {

  //PB dependencies
  var util = pb.util;
  var BaseApiController = pb.BaseApiController;
  var PluginService = pb.PluginService;
  var BaseObjectService = pb.BaseObjectService;
  var BookService = PluginService.getService('BookService', 'articles-api');
  var ArticleService = pb.ArticleService;
  var TYPE = 'article';

  //Creating an inline service.
  function DndService(context) {
    if (!util.isObject(context)) {
      context = {};
    }
    context.type = TYPE;
    DndService.super_.call(this, context);
  }

  util.inherits(DndService, BaseObjectService);

  DndService.getName = function () {
    return "DndService";
  };

  DndService.init = function (cb) {
    pb.log.debug("DndService: Initialized");
    cb(null, true);
  };

  DndService.beforeSave = function (context, cb) {
    cb(null);
  };

  DndService.afterSave = function (context, cb) {
    cb(null);
  };

  DndService.beforeDelete = function (context, cb) {
    cb(null);
  };

  DndService.afterDelete = function (context, cb) {
    cb(null);
  };

  DndService.validate = function (context, cb) {
    cb(null);
  };

  DndService.merge = function (context, cb) {
    cb(null);
  };

  DndService.format = function (context, cb) {
    cb(null);
  };

  DndService.getAll = function (ctx, cb) {
    ctx.data = [{message: "ASDF"}];
    cb(null);
  };

  BaseObjectService.on(TYPE + '.' + BaseObjectService.GET_ALL, DndService.getAll);
  //Done with the inline service

  function BookApiController() {
    this.service = new DndService();
  };
  util.inherits(BookApiController, pb.BaseApiController);

  BookApiController.getRoutes = function (cb) {
    var routes = [
      {
        method: 'get',
        path: "/api/articles",
        handler: "getAll",
        content_type: 'application/json'
      }
    ];
    cb(null, routes);
  };

  //exports
  return BookApiController;
};
