import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import logo from "../../assets/logo-ismt.png";
const AssignmentNoticeRow = () => {
  return (
    <>
      <div className=" flex justify-between items-center border-b-2 p-6 text-xs">
        {/* Assignment Realesed By */}
        <img src={logo} alt="" className="rounded-full h-[70px] w-[70px]" />
        <div className=" flex-col justify-start items-center">
          <h1>Web Development</h1>
          <h1 className="text-xs text-gray-500 my-2">
            Instructor: Bikul Koirala
          </h1>
          <h1 className="text-xs text-blue-500 my-2">assignment@ismt.edu.np</h1>
        </div>
        <div>
          <h1 className="text-gray-400">Due Date: 4 April 2023</h1>
          <h1 className="text-blue-400 my-2 text-xs">
            <LinkIcon />
            <a href="">Download Link</a>
          </h1>
        </div>
      </div>
    </>
  );
};

const AssignmentGrades = () => {
  return (
    <>
      <div className="flex justify-between items-start border-b-2 p-6">
        <div className="flex-col">
          <h1 className="">Security:Networking</h1>
          <h1 className="text-xs text-gray-500 my-2">Er. Santosh Rouniyar</h1>
        </div>
        <h1 className="text-xs flex-1 mx-4 text-black">
          P1: Good P2: Excellent P3: OK M1: Incomplete
        </h1>
        <h1 className="text-green-500 text-xs">PASS</h1>
      </div>
    </>
  );
};

const RowsAssignment = () => {
  return (
    <>
      <div className=" flex justify-between items-center border-b-2 px-6 py-2 text-xs  ">
        {/* Assignment name and details */}
        <div className="flex-1">
          <h1 className="my-2">Advanced Programming</h1>
          <h1 className="text-gray-400">
            Advance programming assignment to solver real world programming
            problems
          </h1>
          <h1 className="text-blue-400 my-2">
            <LinkIcon />
            <a href="">Download Link</a>
          </h1>
        </div>
        {/* Due date and task status */}
        <div className="flex flex-1 justify-between">
          <div></div>
          <div>
            <h1>Feb 9 2023</h1>
            <h1 className="text-green-500 my-3">Submitted</h1>
            <h1 className="text-blue-400 ">
              {" "}
              <a href="">Upload</a>{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const Assignment = () => {
  return (
    <div className="overflow-y-hidden h-screen">
      <h1 className="my-2 rounded text-center bg-blue-400 h-[5vh] flex justify-center items-center">
        <p className="text-xs text-gray-600">
          New Assignment Released: Research Proposal- March 23 2023
          <a href="" className="text-blue-600">
            {" "}
            Link here!
          </a>
        </p>
      </h1>
      <div class="grid grid-cols-2 gap-2 bg-gray-100">
        <div
          className="bg-white m-2 row-span-2
       rounded overflow-auto hover:overflow-scroll "
        >
          <h1 className="text-center m-2 text-orange-400">
            {" "}
            Assignments Summary
          </h1>
          <RowsAssignment />
          <RowsAssignment />
          <RowsAssignment />
        </div>
        <div className="bg-white mt-2 rounded overflow-y-scroll h-[50vh]">
          <h1 className="text-center my-2 text-green-500">
            Assignment Notice Board
          </h1>
          <AssignmentNoticeRow />
          <AssignmentNoticeRow />
          <AssignmentNoticeRow />
        </div>
        <div className="bg-white h-[50vh] rounded overflow-y-scroll">
          <h1 className="text-center my-2 text-yellow-500">
            Assignment Grades
          </h1>
          <AssignmentGrades />
          <AssignmentGrades />
          <AssignmentGrades />
          <AssignmentGrades />
          <AssignmentGrades />
        </div>
      </div>
    </div>
  );
};
export default Assignment;
