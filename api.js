const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey'); // apikey 생성 모듈

const server = app.listen(3001, () => {
    console.log("Start Server : localhost:3001");
});

const key = {
    apiKey: 'NGE8EWY-DB6MNEY-G23JNPM-1QCQJW6',
    uuid: 'ac1c8773-6acd-4abb-8087-2ada0dd97970'
}

//                    :loc은 어떤 값이든 들어올 수 있다는 뜻
app.get('/api/users/:apikey/:loc', async (req, res) => {
    let {
        apikey,
        loc
    } = req.params;
    // isAPIKey -> APIKey의 형식이 맞나 체크 || check -> apikey가 맞나 비교 후 boolean 값 반환
    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send("apikey is not valid.")
   }else{
    if(loc == "seoul"){
        let data = [
            {
                product:"장흥민",
                amount:"seoul"
            },
            {
                product:"이지성",
                amount:"seoul"
            }
    ]
        res.send(data)
    }else if(loc == "jeju"){
        let data = [
            {
                product:"손흥민",
                amount:"jeju"
            },
            {
                product:"박지성",
                amount:"jeju"
            }
    ]
        res.send(data)
    }else{
        res.send("loc is not correct.")
    }
        console.log(loc);
        res.send("ok");
   }
    
   
});

//               :type은 어떤 값이든 들어올 수 있다는 뜻
app.get('/api/sales/:apikey/:year', async (req, res) => {
     let {
        apikey,
        year
    } = req.params;
    
    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send("apikey is not valid.")
    }else{
        if(year == "2019"){
            let data = [
                {
                    product:"반도체",
                    amount:"392,849"
                },
                {
                    product:"냉장고",
                    amount:"2,314,214"
                }
        ]
            res.send(data)
        }else if(year == "2020"){
            let data = [
                {
                    product:"반도체",
                    amount:"23,544"
                },
                {
                    product:"냉장고",
                    amount:"1,324,444"
                }
        ]
            res.send(data)
        }else{
            res.send("year is not correct.")
        }
         console.log(year);
         res.send("ok");
    }
    
});


