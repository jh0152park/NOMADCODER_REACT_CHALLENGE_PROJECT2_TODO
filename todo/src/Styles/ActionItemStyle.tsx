import { styled } from "styled-components";

export const Items = styled.ul``;

export const Item = styled.li`
    margin: 7px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    display: flex;
    position: relative;
`;

export const Move = styled.div`
    background-color: #33ce42;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 3px;
    &:hover {
        cursor: pointer;
    }
`;

export const Delete = styled.div`
    background-color: #fc4646;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 3px;
    &:hover {
        cursor: pointer;
    }
`;

export const CategoriesList = styled.div<{ display: number }>`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100px;
    border-radius: 10px;
    padding: 5px;
    color: whitesmoke;
    margin-left: 3px;
    opacity: ${(props) => props.display};
    transition: opacity 0.2s linear;
    position: absolute;
    right: 0;
`;
