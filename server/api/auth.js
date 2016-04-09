import auth from '../Features/auth.js'


async function Login(ctx, res) {
    ctx.body = auth.Login(ctx.request.query.username, ctx.request.query.password);
}

export default function(router, app) {

    router.get("/auth/login", Login);
}
