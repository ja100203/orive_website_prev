import axios from "axios";

export const getJob = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8089/talents/getAll",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load Talent", error)
    }
}

export const getJobById = async (id) => {
  try {
     const result =  await axios.get(
          `http://localhost:8089/talents/talents/${id}`,
          {
            validateStatus: () => {
              return true;
            },
          }
      
        );
        return result.data
  } catch (error) {
      console.error("Error load Talent", error)
  }
}