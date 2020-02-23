const template = require('../middleware/templating')();

let index = async ctx => {
    ctx.body = template.render('index.html', {
        title: 'Xiao Ao Assistant'
    });
}