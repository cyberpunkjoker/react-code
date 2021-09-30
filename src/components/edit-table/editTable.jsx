/**
 * 可编辑 table 仿 excel 设计
 * 目的：主要是用于性能测试，看看大数据量下的表格处理。
 */
import {Table, Input} from 'antd'
import makeColumns from './config.js'
import mockData from './mock.test.js'

const EditTable = props => {
    const baseCloumns = makeColumns()

	const EditCell = () => {
		const editCell = <td><Input></Input></td>
		return editCell
	}

    return (
        <Table
			rowKey='id'
            columns={baseCloumns}
            dataSource={mockData}
			components={
				{body: {
					cell: EditCell,
					// wrapper: (props) => {
					// 	<tbody {...props}>
							
					// 	</tbody>
					// }
				}}
			}
			scroll={{x: 7200}}
			pagination={false}
        ></Table>
    )
}

export default EditTable