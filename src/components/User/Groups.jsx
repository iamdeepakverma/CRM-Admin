import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ReplayIcon from "@mui/icons-material/Replay";
import SearchIcon from "@mui/icons-material/Search";
import { UserData } from "../../Data/Content";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Groups = () => {
  return (
    <>
      <div className="Main_group_container">
        <div className="d-flex justify-content-between align-items-center inner_container">
          <div>
            <p>User Groups</p>
          </div>
          <div className="d-flex gap-4 icon_inner">
            <span>
              <AddIcon />
            </span>
            <span>
              <ReplayIcon />
            </span>
            <span>
              <SearchIcon />
            </span>
          </div>
        </div>

        <div className="all_user_container">
          {/* <div className="inner_box">
                <span></span>
                <p>Created Tinme</p>
                <p>Name</p>
            </div> */}
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="main-box clearfix mt-4">
                  <div class="table-responsive">
                    <table class="table user-list">
                      <thead>
                        <tr>
                          <th>
                            <span>Created Time</span>
                          </th>
                          <th >
                            <span>Name</span>
                          </th>
                          <th>
                            <span>Photo</span>
                          </th>
                          <th>
                            <span>Status</span>
                          </th>
                          <th>
                            <span>Description</span>
                          </th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      {UserData.map((items, index) => (
                        <tbody>
                          <tr>
                            <td>{items.id}</td>
                            <td>{items.time}</td>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                alt=""
                              />
                              <a href="#" class="user-link">
                                {items.name}
                              </a>
                            </td>
                            <td class="text-center">
                              <span class="label label-success">Active</span>
                            </td>
                            <td>
                              <a href="#">{items.Description}</a>
                            </td>
                            <td className="icon_edit" style={{ width: "20%" }}>
                              <a href="#" class="table-link">
                                <span class="fa-stack">
                                  <EditIcon />
                                </span>
                              </a>
                              <a href="#" class="table-link">
                                <span class="fa-stack">
                                  <DeleteIcon />
                                </span>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
