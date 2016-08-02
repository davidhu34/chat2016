export default ( mongoose ) => {
    const { Schema } = mongoose

    mongoose.model( 'User', new Schema({
        id: String,
        name: String,
        rooms: [String]
    }))

    return {
        User: mongoose.model('User')
    }
}
