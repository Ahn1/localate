const cluster = require('cluster');


function GetClusterInfo() {
    let info = {
        isMaster: cluster.isMaster,
        isWorker: cluster.isWorker
    };

    if (info.isWorker)
        info.workerId = cluster.worker.id;

    return info;

}

export default function(router, app) {

    router.get("/info", async ctx => {
        ctx.body = {
            Cluster: GetClusterInfo()
        };
    });
}
