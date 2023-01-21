import React, {useState} from 'react'
import styled from 'styled-components'

const Scale = () => {
    const [drop, setDrop] = useState<Boolean>(false)
    const [drop2, setDrop2] = useState<Boolean>(false)
    const [drop3, setDrop3] = useState<Boolean>(false)
    const [drop4, setDrop4] = useState<Boolean>(false)
    const [drop5, setDrop5] = useState<Boolean>(false)
    const [drop6, setDrop6] = useState<Boolean>(false)
    const [drop7, setDrop7] = useState<Boolean>(false)
    const [drop8, setDrop8] = useState<Boolean>(false)
    const [drop9, setDrop9] = useState<Boolean>(false)
    const [drop10, setDrop10] = useState<Boolean>(false)
    const [drop11, setDrop11] = useState<Boolean>(false)
    const [drop12, setDrop12] = useState<Boolean>(false)
    const [drop13, setDrop13] = useState<Boolean>(false)
    const [drop14, setDrop14] = useState<Boolean>(false)
    const [drop15, setDrop15] = useState<Boolean>(false)
    const [drop16, setDrop16] = useState<Boolean>(false)
    const [drop17, setDrop17] = useState<Boolean>(false)
    const [drop18, setDrop18] = useState<Boolean>(false)
    const [drop19, setDrop19] = useState<Boolean>(false)

    const Toggle = () => {
        setDrop(!drop)
        setDrop2(false)
        setDrop3(false)
        setDrop4(false)
        setDrop5(false)
        setDrop6(false)
        setDrop7(false)
        setDrop8(false)
        setDrop9(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }

    const Toggle2 = () => {
        setDrop2(!drop2)
        setDrop(false)
        setDrop3(false)
        setDrop4(false)
        setDrop5(false)
        setDrop6(false)
        setDrop7(false)
        setDrop8(false)
        setDrop9(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }

     const Toggle3 = () => {
        setDrop3(!drop3)
        setDrop2(false)
        setDrop(false)
        setDrop4(false)
        setDrop5(false)
        setDrop6(false)
        setDrop7(false)
        setDrop8(false)
        setDrop9(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle4 = () => {
        setDrop4(!drop4)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop5(false)
        setDrop6(false)
        setDrop7(false)
        setDrop8(false)
        setDrop9(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle5 = () => {
        setDrop5(!drop5)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop6(false)
        setDrop7(false)
        setDrop8(false)
        setDrop9(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle6 = () => {
        setDrop6(!drop6)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop7(false)
        setDrop8(false)
        setDrop9(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
       setDrop14(false) 
       setDrop15(false)
       setDrop16(false)
       setDrop17(false)
       setDrop18(false)
       setDrop19(false)
    }
    const Toggle7 = () => {
        setDrop7(!drop7)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop8(false)
        setDrop9(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle8 = () => {
        setDrop8(!drop8)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop9(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle9 = () => {
        setDrop9(!drop9)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop10(false)
        setDrop11(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle10 = () => {
        setDrop10(!drop10)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop11(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle11 = () => {
        setDrop11(!drop11)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop12(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle12 = () => {
        setDrop12(!drop12)
        setDrop11(false)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop13(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle13 = () => {
        setDrop13(!drop13)
        setDrop12(false)
        setDrop11(false)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop14(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle14 = () => {
        setDrop14(!drop14)
        setDrop13(false)
        setDrop12(false)
        setDrop11(false)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop15(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle15 = () => {
        setDrop15(!drop15)
        setDrop14(false)
        setDrop13(false)
        setDrop12(false)
        setDrop11(false)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop16(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle16 = () => {
        setDrop16(!drop16)
        setDrop15(false)
        setDrop14(false)
        setDrop13(false)
        setDrop12(false)
        setDrop11(false)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop17(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle17 = () => {
        setDrop17(!drop17)
        setDrop16(false)
        setDrop15(false)
        setDrop14(false)
        setDrop13(false)
        setDrop12(false)
        setDrop11(false)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop18(false)
        setDrop19(false)
    }
    const Toggle18 = () => {
        setDrop18(!drop18)
        setDrop17(false)
        setDrop16(false)
        setDrop15(false)
        setDrop14(false)
        setDrop13(false)
        setDrop12(false)
        setDrop11(false)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
        setDrop19(false)
    }
    const Toggle19 = () => {
        setDrop19(!drop19)
        setDrop18(false)
        setDrop17(false)
        setDrop16(false)
        setDrop15(false)
        setDrop14(false)
        setDrop13(false)
        setDrop12(false)
        setDrop11(false)
        setDrop10(false)
        setDrop9(false)
        setDrop8(false)
        setDrop7(false)
        setDrop6(false)
        setDrop5(false)
        setDrop4(false)
        setDrop3(false)
        setDrop2(false)
        setDrop(false)
    }
  return (
    <Container>
        <Top>Scale faster with Andela</Top>
        <Bold>What skills will drive your vision?</Bold>
        <Wrapper>
            <Share>
                <Hold onClick={Toggle}>Python</Hold>
                {drop ? (<Drop>Python is a programming language</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle2}>Node.js</Hold>
                {drop2 ? (<Drop>Node.Js is a programming language</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle3}>Kotlin</Hold>
                {drop3 ? (<Drop>Kotlin is a programming language</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle4}>Flask</Hold>
                {drop4 ? (<Drop>Flask is a programming language</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle5}>React Native</Hold>
                {drop5 ? (<Drop>React Native for mobile</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle6}>vue.js</Hold>
                {drop6 ? (<Drop>vue js a programming language</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle7}>PHP</Hold>
                {drop7 ? (<Drop>PHP a programming language</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle8}>Android</Hold>
                {drop8 ? (<Drop>Android for phone</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle9}>Javascript</Hold>
                {drop9 ? (<Drop>Javascript a programming language</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle10}>Ruby</Hold>
                {drop10 ? (<Drop>Ruby for programming</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle11}>C#</Hold>
                {drop11 ? (<Drop>C# for programming</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle12}>DevOps</Hold>
                {drop12 ? (<Drop>DevOps for programmers</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle13}>Golang</Hold>
                {drop13 ? (<Drop>Golang for programmers</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle14}>Data Scientist</Hold>
                {drop14 ? (<Drop>Data Scientist programmers</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle15}>React.js</Hold>
                {drop15 ? (<Drop>React.js programmers</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle16}>Swift</Hold>
                {drop16 ? (<Drop>Swift programmers</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle17}>SalesForce</Hold>
                {drop17 ? (<Drop>SalesForce programmers</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle18}>Java</Hold>
                {drop18 ? (<Drop>Java programmers</Drop>) : null}
            </Share>
            <Share>
                <Hold onClick={Toggle19}>Django</Hold>
                {drop19 ? (<Drop>Django programmers</Drop>) : null}
            </Share>
        </Wrapper>
    </Container>
  )
}

export default Scale
const Drop = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    width: 290px;
    margin-left: 20px;
    height: 40px;
    margin-bottom: 25px;
`
const Share = styled.div`
    display: flex;
    flex-direction: column;
`

const Bold = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    clear: both;
    margin: 0px 0px 24px 0px;
    font-weight: 400;
    color: #132128;
`

const Top = styled.h5`
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    font-family: 'Inter',sans-serif;
`

const Hold = styled.div`
    border-radius: 40px;
    border: 1px solid #f8f8f8;
    background-color: #fff;
    font-weight: 300;
    margin-bottom: 25px;
    font-size: 20px;
    line-height: 48px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    width: 280px;
    height: 50px;
    background-color: white;
    padding-left: 20px;
    transition: .2s ease-in-out 0s;
    cursor: pointer;
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
`

const Container = styled.div`
    width: 100%;
    padding-top: 110px;
    display: flex;
    justify-content: center;
    background-color: #EDEFF1;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`