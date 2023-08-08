import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    overflow: hidden;
`;

export const TodoBox = styled.div`
    width: 300px;
    min-height: 300px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #d6de72;
    color: black;
`;

export const DoingBox = styled.div`
    width: 300px;
    min-height: 300px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #a3d2c5;
    color: black;
`;

export const DoneBox = styled.div`
    width: 300px;
    min-height: 300px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #ef91b0;
    color: black;
`;

export const NewBox = styled.div`
    width: 300px;
    min-height: 300px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #ede2a8;
    color: black;
`;

export const PostitTitle = styled.p`
    color: black;
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
`;
