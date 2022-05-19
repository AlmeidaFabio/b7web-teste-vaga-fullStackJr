import styled from 'styled-components'

export const NoteContainer = styled.div<{bg:string}>`
    flex: 1;
    margin: 20px 10px;
    min-height: 140px;

    border: 1px solid #bbb;
    border-radius: 10px;
    background: ${props => props.bg};
    color: #000;
    font-size: 1.1rem;
    display: flex;
    box-shadow: 1px 1px 4px #555;

    .content {
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .buttons-area {
        width: 120px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 0 10px 10px 0;
        background: rgb(100, 131, 209);

        button, a {
            padding: 5px;
            border-radius: 10px;
            border: 1px solid #bbb;
            cursor: pointer;
            background: rgb(246, 240, 193);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .9rem;
            font-weight: bold;
            opacity: 1;
            transition: all ease .4s;

            :hover {
                opacity: .6;
                border: 1px solid #ccc;
            }
        }
    }

    @media(max-width: 700px) {
        font-size: 1rem;
    }
`