import auth from '../Features/auth.js'


async function Login(ctx, res) {
    let token = await auth.Login(ctx.request.query.username.toLowerCase(), ctx.request.query.password);
    let result = {};

    if (!token) {
        result.success = false;
    } else {
        result.success = true;
        result.token = token;
    }

    ctx.body = result;
}

export default function(router, app) {

    router.get("/auth/login", Login);
}
