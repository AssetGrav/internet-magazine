const Subject = require('../models/Subject')
const Quality = require('../models/Qualities')
const subjectMock = require('../mock/subjects.json')
const qualitiesMock = require('../mock/qualities.json')

module.exports = async () => {
    const subjects = await Subject.find()
    if (subjects.length !== subjectMock.length) {
        await createInitialEntity(Subject, subjectMock)
    }
    const qualities = await Quality.find()
    if (qualities.length !== qualitiesMock.length) {
        await createInitialEntity(Quality, qualitiesMock)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (e) {
                return e
            }
        })
    )
}