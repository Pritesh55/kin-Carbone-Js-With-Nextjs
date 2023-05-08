"use client"

import React, { useState } from 'react'
import axios from 'axios';

const ProductsDisplayAdmin = () => {

    const [myRenderId, setMyRenderId] = useState("")

    const RenderId = async () => {

        let data = {
            "convertTo": "pdf",
            "data": {
                "id": 11,
                // Date is from https://www.epochconverter.com/ :: UNIX 10 digit code
                "date": 1683553668,
                "company": {
                    "name": "SkillMine",
                    "address": "Karnataka , India",
                    "city": "Bengluru",
                    "postalCode": 560017
                },
                "customer": {
                    "name": "Varun shah 88615",
                    "address": "Ahmedabad, Gujarat , India",
                    "city": "Ahmedabad",
                    "postalCode": 380063
                },
                "products": [
                    {
                        "name": "Mahabharat 83",
                        "priceUnit": 500,
                        "quantity": 10,
                        "priceTotal": 5000
                    },
                    {
                        "name": "Rmayana 060 ",
                        "priceUnit": 600,
                        "quantity": 20,
                        "priceTotal": 12000
                    },
                    {
                        "name": "RamcharitManas 17",
                        "priceUnit": 300,
                        "quantity": 30,
                        "priceTotal": 9000
                    }
                ],
                "total": 30000
            }
        }

        await axios.post('https://render.carbone.io/render/:1cc8186b6b3860a372993db880d6b1f01a981ee12ea6fb7308f5715c9ca1705c', data, {
            headers: {
                'Content-Type': 'application/json',

                'Authorization': 'test_eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI2MjE0OTU2OTUyMzQwMTUzMDgiLCJhdWQiOiJjYXJib25lIiwiZXhwIjoyMzQ1ODAzMjYxLCJkYXRhIjp7ImlkQWNjb3VudCI6IjYyMTQ5NTY5NTIzNDAxNTMwOCJ9fQ.ALjXfqpXOQoob7cz2CCk32pYAQ7HgFvxXdTy7FsfcK_BEtj_yZZy1S8ztJgr-I0punm-2C4aKziPm_DiI_EVuWrbAWDsIywmSFmo_EyRF8Riis9iDqloyBOpbdnr56-qa0sQ2NXnd-_cRMkPjhum8qZHnd9_0BI3WsJJ4o_BXSmMfUiN',

                'carbone-version': '4'
            }
        }).then((response) => {
            console.log(response.data.data.renderId);
            setMyRenderId(response.data.data.renderId);
        }, (error) => {
            console.log(error);
        });


        await axios.get(`https://api.carbone.io/render/${myRenderId}`).then((response) => {
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });

    };

    return (
        <>

            <button onClick={() => {
                RenderId();
            }}>RenderId  </button>

            {
                (myRenderId) &&
                <>
                    <a href={`https://api.carbone.io/render/${myRenderId}`} className="flex justify-center flex-wrap border-2 border-green-600 mx-auto px-5 py-3 text-blue-700">
                        {myRenderId}
                    </a>
                </>

            }

        </>
    )
}

export default ProductsDisplayAdmin