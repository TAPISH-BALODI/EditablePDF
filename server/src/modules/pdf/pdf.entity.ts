import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Pdf extends Model<Pdf> {
    @Column({
        primaryKey:true,
        type: DataType.STRING,
        allowNull: false,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        
        allowNull: false,
    })
    name: string;

    @Column({
        
        type: DataType.STRING,
        allowNull: false,
    })
    file:string

    
}