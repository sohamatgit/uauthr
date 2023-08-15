const userUrl = "http://localhost:8080/api/user-manager/users";

export const fetchUsers = async () => {
  try {
    const response = await fetch(userUrl);
    if (!response.ok) {
      throw new Error("Error fetching data:");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const createUser = async (data) => {
  try {
    const response = await fetch(userUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error("Failed to create post");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(userUrl +'/'+ id, {
      method: "DELETE"
    });

    if (response.ok) {
      console.log("User Deleted")
    } else {
      console.error("Failed to create post");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};