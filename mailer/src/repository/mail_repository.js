const { MailModel } = require('../model/mail_model');

const MailRepository = {
    async insertEmail(data) {
        const model = new MailModel(data);
        const result = await model.save();
        return result;
    }
}

module.exports = MailRepository;