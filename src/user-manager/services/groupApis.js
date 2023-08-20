const groupUrl = "http://localhost:8080/api/user-manager/groups";

export const fetchGroups = async () => {
  try {
    const response = await fetch(groupUrl);
    if (!response.ok) {
      throw new Error("Error fetching data:");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const createGroup = async (data) => {
  try {
    const response = await fetch(groupUrl, {
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

export const deleteGroup = async (id) => {
  try {
    const response = await fetch(groupUrl + "/" + id, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Group Deleted");
    } else {
      console.error("Failed to create post");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
