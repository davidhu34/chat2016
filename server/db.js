import mongoose from 'mongoose'
import stuctModels from './models'

mongoose.connect('mongodb://davidhu34:123qweasd@ds139685.mlab.com:39685/chat2016')
export const models = stuctModels( mongoose )
