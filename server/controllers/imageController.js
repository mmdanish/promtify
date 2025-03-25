

export const generateImage = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
