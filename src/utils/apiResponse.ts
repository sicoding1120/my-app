import { Blog, Class } from "@/backends/interfaces/index";

export class ResponseApiRouter {
  _getSuccess(classes: Class[] | Blog[]) {
    return {
      message: "Classes retrieved successfully",
      status: 200,
      data: {
        totalRecords: classes.length,
        classes: classes,
      },
      meta: {
        timestamp: new Date().toISOString(),
        source: "Prisma Client",
        action: "fetchAllClasses",
        status: "success",
      },
      info: {
        nextStep: "Use this data to render the class catalog",
        note: "All classes are up-to-date with the latest information.",
        version: "v1.0.0",
      },
    };
  }
  _getByIdSuccess(classData: Class | Blog) {
    return {
      message: "Class data retrieved successfully",
      status: 200,
      data: classData,
      meta: {
        timestamp: new Date().toISOString(),
        source: "Prisma Client",
        action: "fetchClassById",
        status: "success",
      },
      info: {
        nextStep: "Display class details to the user",
        note: "Ensure that class information is accurate and up-to-date.",
        version: "v1.0.0",
      },
    };
  }
  _getByIdFailure(id: number) {
    return {
      message: "Class not found",
      status: 404,
      error: {
        description: `Class with ID ${id} does not exist.`,
        solution: "Verify the class ID or try searching for other classes.",
      },
      meta: {
        timestamp: new Date().toISOString(),
        source: "Prisma Client",
        action: "fetchClassById",
        status: "not_found",
      },
    };
  }

  _getFailure(error: any) {
    return {
      message: "Failed to retrieve classes",
      status: 500,
      error: {
        description: "An unexpected error occurred while fetching class data.",
        technicalDetails: error.message,
        solution: "Please contact backend support if the issue persists.",
      },
      meta: {
        timestamp: new Date().toISOString(),
        source: "Prisma Client",
        action: "fetchAllClasses",
        status: "failure",
      },
    };
  }

  _getInternalServerError(error: any) {
    return {
      message: "Failed to retrieve class data",
      status: 500,
      error: {
        description: "An error occurred while fetching the class by ID.",
        technicalDetails: error.message,
        solution: "Please try again later or contact support.",
      },
      meta: {
        timestamp: new Date().toISOString(),
        source: "Prisma Client",
        action: "fetchClassById",
        status: "failure",
      },
    };
  }
  _createDataSuccess(newData: Class[] | Blog[]) {
    return {
      message: "Class successfully created",
      status: 201,
      data: newData,
      meta: {
        timestamp: new Date().toISOString(),
        action: "createClass",
        status: "success",
      },
      info: {
        nextStep: "Use this class in your platform",
        note: "Class data has been stored in the database.",
        version: "v1.0.0",
      },
    };
  }
  _createDataFailure(error: any) {
    return {
      message: "Failed to create class",
      status: 500,
      error: {
        description: "An error occurred while creating the class.",
        technicalDetails: error.message,
        solution:
          "Ensure the request body is correct and all required fields are provided.",
      },
      meta: {
        timestamp: new Date().toISOString(),
        action: "createClass",
        status: "failure",
      },
    };
  }

  _updateDataSuccess(updatedData: Class[] | Blog[]) {
    return {
      message: "Class successfully updated",
      status: 200,
      data: updatedData,
      meta: {
        timestamp: new Date().toISOString(),
        action: "updateClass",
        status: "success",
      },
      info: {
        nextStep: "Verify the updated class information on your platform",
        note: "Class data has been successfully modified.",
        version: "v1.0.0",
      },
    };
    }
    
    _updateDataFailureNotFound(id:number) {
        return {
          message: "Class not found",
          status: 404,
          error: {
            description: `Class with ID ${id} does not exist.`,
            solution:
              "Ensure the ID is correct or create a new class if needed.",
          },
          meta: {
            timestamp: new Date().toISOString(),
            action: "updateClass",
            status: "failure",
          },
        };
    }

    _updateDataFailureISR(error:any) {
        return {
          message: "Failed to update class",
          status: 500,
          error: {
            description: "An error occurred while updating the class.",
            technicalDetails: error.message,
            solution: "Ensure all the data is valid and the ID is correct.",
          },
          meta: {
            timestamp: new Date().toISOString(),
            action: "updateClass",
            status: "failure",
          },
        };
    }
    
    _deleteDataSuccess(deletedData: Class[] | Blog[]) {
        return {
          message: "Class successfully deleted",
          status: 200,
          data: deletedData,
          meta: {
            timestamp: new Date().toISOString(),
            action: "deleteClass",
            status: "success",
          },
          info: {
            nextStep: "Verify the deleted class on your platform",
            note: "Class data has been successfully deleted.",
            version: "v1.0.0",
          },
        };
    }
    _deleteDataFailureNotFound(id:number) {
        return {
          message: "Class not found",
          status: 404,
          error: {
            description: `Class with ID ${id} does not exist.`,
            solution: "Verify the ID or it may have already been deleted.",
          },
          meta: {
            timestamp: new Date().toISOString(),
            action: "deleteClass",
            status: "failure",
          },
        };
    }
    
    _deleteDataFailureISR(error: any) {
        return {
          message: "Failed to delete class",
          status: 500,
          error: {
            description: "An error occurred while deleting the class.",
            technicalDetails: error.message,
            solution: "Ensure the ID is correct and the class exists.",
          },
          meta: {
            timestamp: new Date().toISOString(),
            action: "deleteClass",
            status: "failure",
          },
        };
    }
}
