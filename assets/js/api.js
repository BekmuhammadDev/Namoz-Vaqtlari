const baseURL=`https://islomapi.uz`

async function getDaily(URL,region) {
    try{
        const req=await fetch(`${URL}/api/present/day/?region=${region}`)
        const res=await req.json()
        return res;

    }

    catch(err){
        console.log(err)
    }
}


async function getweekly(URL,region) {
    try{
        const req=await fetch(`${URL}api/present/week/?region=${region}`)
        const res=await req.json()
        console.log(res);

    }

    catch(err){
        console.log(err)
    }
}

async function getMonthly(URL,region,duration) {
    try{
        const req=await fetch(`${URL}api/monthly?region=${region}&month=${duration}`)
        const res=await req.json()
        console.log(res);
    }

    catch(err){
        console.log(err)
    }
}
