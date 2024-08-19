cmake_minimum_required(VERSION 3.0.2)
project(celestial_sphere)

find_package(catkin REQUIRED)

catkin_package()

file(DOWNLOAD
    https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004851/starmap_2020_8k.exr
    ${PROJECT_SOURCE_DIR}/models/celestial_sphere/materials/textures/starmap_2020_8k.exr
    SHOW_PROGRESS
    EXPECTED_MD5 c98b6652bf5604ff5124fac4d0c28591
)

install(DIRECTORY models world
    DESTINATION ${CATKIN_PACKAGE_INCLUDE_DESTINATION}
)
