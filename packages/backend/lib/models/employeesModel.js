const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmployeeSchema = new Schema(
	{
		id: { type: Number },
		managerId: { type: Number },
		name: { type: String },
	},
	{ collection: 'employees' },
);

module.exports = mongoose.model('Employees', EmployeeSchema);