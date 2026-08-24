function getTopCourses(enrollments, topN){
    const count={}

    for( const course of enrollments){
        count[course] = (count[course] || 0) +1;
    }

    return Object.entries(count)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,topN);
}

const enrollments = ["HTML", "CSS", "HTML", "JavaScript", "HTML", "CSS"];
console.log(getTopCourses(enrollments, 2));
