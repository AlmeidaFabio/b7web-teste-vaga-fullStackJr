import styled from 'styled-components'

export const FormContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        min-width: 400px;
        max-width: 800px;
        min-height: calc(100vh - 80px);
        padding: 20px;

        display: flex;
        flex-direction: column;
        
        border-radius: 10px;
        color: #000;

        label {
            width: 100%;
            display: flex;  
            flex-direction: column;
            padding: 10px;
            margin-bottom: 5px;

            span {
                width: 200px;
                font-weight: bold;
                margin-bottom: 5px;
            }

            input {
                flex: 1;
                padding: 10px;
                font-size: 1.1rem;
                
                @media(max-width: 700px){
                    width: 94%;
                    font-size: 1rem;
                }
            }

            textarea {
                flex: 1;
                resize: vertical, bottom;
                min-height: 500px;
                padding: 10px;
                font-size: 1.1rem;

                @media(max-width: 700px) {
                    width: 94%;
                    min-height: 350px;
                    font-size: 1rem;
                }
            }

            select {
                width: 120px;
                padding: 2px;
            }
        }

        button {
            width: 300px;
            align-self: center;
            padding: 10px;
            margin-top: 50px;
            cursor: pointer;
            font-weight: bold;
            outline: 0;
            border: 0;
            border-radius: 10px;
            background: rgb(100, 131, 209);
            color: #fff;
            opacity: 1;
            transition: all ease .4s;

            :hover {
                opacity: .6;
            }
        }

        @media(max-width: 700px) {
            height: 100%;
            min-height: calc(100vh - 230px);
        }
    }
`