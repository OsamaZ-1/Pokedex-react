import React from "react";
import "./InfoTable.css";

function InfoTable(props){
    return(<table>
        <tbody>
            <tr>
                <th>Name: </th>
                <td>{props.info.name}</td>
            </tr>
            <tr>
                <th>type: </th>
                <td>{props.info.type}</td>
            </tr>
            <tr>
                <th>HP: </th>
                <td>{props.info.hp}</td>
            </tr>
            <tr>
                <th>Attack: </th>
                <td>{props.info.attack}</td>
            </tr>
            <tr>
                <th>Defence: </th>
                <td>{props.info.defence}</td>
            </tr>
            <tr>
                <th>Special Attack: </th>
                <td>{props.info.spa}</td>
            </tr>
            <tr>
                <th>Special Defence: </th>
                <td>{props.info.spd}</td>
            </tr>
            <tr>
                <th>Speed: </th>
                <td>{props.info.speed}</td>
            </tr>
        </tbody>
    </table>);
}

export default InfoTable;