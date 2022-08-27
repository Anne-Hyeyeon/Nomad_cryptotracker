import React from 'react';
import { useParams } from 'react-router-dom';


function Coin() {
    const { coinId } = useParams();
    // console.log(변수명); 하면, 우리가 라우터에서 설정한 coinId의 값이 URL에 따라 할당되는 걸 볼 수 있다.
    return (
        <h1>coin : {coinId}</h1>
    );
}

export default Coin;