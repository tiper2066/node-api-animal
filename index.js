const express = require('express');
const cors = require('cors');

const app = express();

// cors(여기에 요청에 대한 조건을 설정할 수 있음), 비워두면 모든 요청 허용
app.use(cors()); // cors 객체 생성 및 사용
app.get('/', (req, res) => res.send('Hello World'));
app.get('/sound/:name', (req, res) => {
    // params 가 json 형식일 경우, 이렇게 추출해서 사용가능
    const { name } = req.params;
    if (name === 'dog') {
        res.json({ sound: '멍멍' });
    } else if (name === 'cat') {
        res.json({
            sound: '야옹',
            img: 'https://purr.objects-us-east-1.dream.io/i/yudBm.jpg',
        });
    } else if (name === 'pig') {
        res.json({ sound: '꿀꿀' });
    } else {
        res.json({ sound: '알수없음' });
    }
});

app.listen(3000, () => console.log('Start Server for 3000 port'));
