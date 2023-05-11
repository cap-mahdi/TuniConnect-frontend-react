import React, { useEffect ,useState} from "react";
import { useLocation } from "react-router";
import Spin from "../Components/Spin";
import { searchMember } from "../API/Accounts/accountsController";
import Search from "../Components/Search/Search";
import { fetchDataWithArgs } from "../API/utilities";
import { set } from "date-fns";

export default function SearchPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get('keyword');
    const [members, setMembers] = useState(null);
    const [key, setKey] = useState(keyword);
    useEffect(() => {
        fetchDataWithArgs(searchMember, setMembers, key);
    }, []);
    useEffect(() => {
        if(queryParams.get('keyword') === key)
            return;
        setKey(queryParams.get('keyword'));
        setMembers(null);
        fetchDataWithArgs(searchMember, setMembers, queryParams.get('keyword'));
    })

    useEffect(() => {
        console.log("members   " , members);
    }, [members]);
    return members ? <Search members={members} /> : <Spin />;
    }