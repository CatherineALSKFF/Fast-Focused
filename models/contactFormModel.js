// models/contactFormModel.js
import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema({
  fitnessGoal: String,
  gender: String,
  ageRange: String,
  trainingDuration: String,
  trainingHistory: String,
  name: String,
  email: String,
  WhatsAppNumber: String,
  country: String,
  profession: String,
  instagram: String
});

export default mongoose.models.ContactForm || mongoose.model('ContactForm', contactFormSchema);
