import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    max-width: 1280px;
    height: 100%;
    min-height: calc(100vh - 2px);
    display: flex;
    background: rgba(200, 255, 255, 0.872);

    @media(max-width: 700px) {
        flex-direction: column;
    }
`

export const NotesArea = styled.div`
    flex: 1;
    padding: 10px 20px;
`

export const MenuArea = styled.div`
    width: 250px;
    color: #fff;
    background: rgb(100, 131, 209);

    @media(max-width: 700px) {
        width: 100%;
    }
    
`

export const Logo = styled.div`
    width: 100%;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 2.5rem;
    font-weight: bold;

    border-bottom: 1px solid #fff;

    @media(max-width: 700px) {
        flex-direction: row;
        height: 100px;

        span {
            margin: 5px;
        }
    }
`

export const Menu = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 10px;
   margin-top: 20px;

   a {
       padding: 10px;
       font-size: 20px;
       opacity: 1;
       transition: all ease .5s;

       :hover {
           opacity: .6;
           text-decoration: underline;
       }
   }

   @media(max-width: 700px) {
        height: 50px;
        padding: 0;
        margin: 0;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`