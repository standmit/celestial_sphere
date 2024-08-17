cmake_minimum_required(VERSION 3.0.2)
project(celestial_sphere)

find_package(catkin REQUIRED)

catkin_package()

install(DIRECTORY models world
    DESTINATION ${CATKIN_PACKAGE_INCLUDE_DESTINATION}
)
