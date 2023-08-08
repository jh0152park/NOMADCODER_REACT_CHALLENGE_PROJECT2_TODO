import { styled } from "styled-components";

export const FormContainer = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    position: fixed;
    width: 100%;
    height: 20vh;
    /* background-color: rgba(255, 255, 255, 0.5); */
`;

export const CreateButton = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    width: 350px;
    &:hover {
        scale: 1.1;
        cursor: pointer;
        transform-origin: center left;
        color: #d6de72;
        transition: color 0.2s linear;
    }
`;

export const AddCategoryBoard = styled.div`
    width: 400px;
    height: 50px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
`;

export const AddItemBoard = styled.div`
    width: 450px;
    height: 50px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
`;

export const Input = styled.input`
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    width: 400px;
    height: 40px;
    background-color: inherit;
    color: white;
    font-size: 12px;

    &::placeholder {
        color: white;
        font-size: 12px;
    }
`;
