"use client"

import React, { useState } from 'react'
import axios from 'axios';

const ProductsDisplayAdmin = () => {
    // ----------------------------------------------------
    // we will use "useState" to save that RenderId....
    const [myRenderId, setMyRenderId] = useState("");
    // ----------------------------------------------------

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
                "total": 26000
            }
        }

        // Here paste your :: (Account data :: 03) Template ID ::
        // Url format is  :: 
        await axios.post('https://render.carbone.io/render/:1cc8186b6b3860a372993db880d6b1f01a981ee12ea6fb7308f5715c9ca1705c',

            //  Goto the 
            // "Quickstart Carbone Cloud API" Section of 
            // "documentation" page of 
            // "Carbone-Js" Official Websie....

            // => Click on this Section Link::
            // https://carbone.io/documentation.html#quickstart-carbone-cloud-api

            // --------------------()--------- ()--------- ()-----------------

            // => Then Goto 3rd step of that section.....
            // -----------------------------------------------
            //     "3 - Generate a report from the template ID"
            // --------------------------------------------

            //     And copy "purply Highlited" Format of the url::

            //     -----------------------------------------------------------
            // :: POST https://render.carbone.io/render/:templateID ::
            // -----------------------------------------------------------

            // To Get templateID ::
            // ------------------------


            //  ------------------------------
            // https://studio.carbone.io/
            // ------------------------------

            // Then Click on :: 
            // --------------
            // Second Navbar => in Right side => Two icons => 
            // 1) Info and 2) settings => Click on Info Icon......  

            // Then Copy your 2nd and 3rd important data....
            // ---------------------------------------
            // 2) Filename :: 
            // smt5

            // 3) Template ID   ::
            // 1cc8186b6b3860a372993db880d6b1f01a981ee12ea6fb7308f5715c9ca1705c

            // -------------------------------------------------------

            data,

            // :: let's Do the "02 thing" :: Data ::

            // So, We are on the Page  :: 
            // https://carbone.io/documentation.html#quickstart-carbone-cloud-api

            // => Then Goto 3rd step of that section.....
            // -----------------------------------------------
            // Copy this 
            // "intial code" of "data" of our  "axios.post" Request" from section.....

            // ------------------------------------
            // {
            //   "convertTo": "pdf",
            //   "data": {
            //     "firstname": "John",
            //     "lastname": "Wick"
            //   }
            // }
            // ------------------------------------

            // :: this Object's 2nd attribute :: "data" 's value::
            // :: We will change this "data" atribute's value....

            //     Goto :: https://studio.carbone.io/ ::
            // :: and copy:: "the Left section" :: of:: main body::

            {
                headers: {
                    'Content-Type': 'application/json',
                    // Here paste your :: (Account data :: 01) Test API key ::
                    'Authorization':
                        'test_eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI2MjE0OTU2OTUyMzQwMTUzMDgiLCJhdWQiOiJjYXJib25lIiwiZXhwIjoyMzQ1ODAzMjYxLCJkYXRhIjp7ImlkQWNjb3VudCI6IjYyMTQ5NTY5NTIzNDAxNTMwOCJ9fQ.ALjXfqpXOQoob7cz2CCk32pYAQ7HgFvxXdTy7FsfcK_BEtj_yZZy1S8ztJgr-I0punm-2C4aKziPm_DiI_EVuWrbAWDsIywmSFmo_EyRF8Riis9iDqloyBOpbdnr56-qa0sQ2NXnd-_cRMkPjhum8qZHnd9_0BI3WsJJ4o_BXSmMfUiN',

                    // https://account.carbone.io/ 
                    // => My Subscription Box 
                    // => Test API key

                    // => Email id:: iampritesh13 @gmail.com
                    // => Passward:: Kashi @281055

                    'carbone-version': '4'
                }
            }).then((response) => {
                // ----------------------------------------------------
                // So, "Carbone Cloud API" will give "renderId" in the response of "POST" Request.....
                console.log(response.data.data.renderId);
                // ----------------------------------------------------
                // we will use "useState" to save that RenderId....
                setMyRenderId(response.data.data.renderId);
                // ----------------------------------------------------
            }, (error) => {
                console.log(error);
            });

    };

    return (
        <>
            {/* Now , Create a Two Button........... */}
            {/* To send the data to API via "POST" Request.....    */}
            {/* and Get the  RenderID of the PDF from API  */}
            <button onClick={() => {
                RenderId();
            }}>RenderId  </button>


            {/*  To Download the pdf Created at the "RenderID" Url..... */}
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