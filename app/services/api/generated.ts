import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "show_sources" */
  delete_show_sources?: Maybe<Show_Sources_Mutation_Response>;
  /** delete single row from the table: "show_sources" */
  delete_show_sources_by_pk?: Maybe<Show_Sources>;
  /** delete data from the table: "shows" */
  delete_shows?: Maybe<Shows_Mutation_Response>;
  /** delete single row from the table: "shows" */
  delete_shows_by_pk?: Maybe<Shows>;
  /** delete data from the table: "sources" */
  delete_sources?: Maybe<Sources_Mutation_Response>;
  /** delete single row from the table: "sources" */
  delete_sources_by_pk?: Maybe<Sources>;
  /** delete data from the table: "user_shows" */
  delete_user_shows?: Maybe<User_Shows_Mutation_Response>;
  /** delete single row from the table: "user_shows" */
  delete_user_shows_by_pk?: Maybe<User_Shows>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "show_sources" */
  insert_show_sources?: Maybe<Show_Sources_Mutation_Response>;
  /** insert a single row into the table: "show_sources" */
  insert_show_sources_one?: Maybe<Show_Sources>;
  /** insert data into the table: "shows" */
  insert_shows?: Maybe<Shows_Mutation_Response>;
  /** insert a single row into the table: "shows" */
  insert_shows_one?: Maybe<Shows>;
  /** insert data into the table: "sources" */
  insert_sources?: Maybe<Sources_Mutation_Response>;
  /** insert a single row into the table: "sources" */
  insert_sources_one?: Maybe<Sources>;
  /** insert data into the table: "user_shows" */
  insert_user_shows?: Maybe<User_Shows_Mutation_Response>;
  /** insert a single row into the table: "user_shows" */
  insert_user_shows_one?: Maybe<User_Shows>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "show_sources" */
  update_show_sources?: Maybe<Show_Sources_Mutation_Response>;
  /** update single row of the table: "show_sources" */
  update_show_sources_by_pk?: Maybe<Show_Sources>;
  /** update data of the table: "shows" */
  update_shows?: Maybe<Shows_Mutation_Response>;
  /** update single row of the table: "shows" */
  update_shows_by_pk?: Maybe<Shows>;
  /** update data of the table: "sources" */
  update_sources?: Maybe<Sources_Mutation_Response>;
  /** update single row of the table: "sources" */
  update_sources_by_pk?: Maybe<Sources>;
  /** update data of the table: "user_shows" */
  update_user_shows?: Maybe<User_Shows_Mutation_Response>;
  /** update single row of the table: "user_shows" */
  update_user_shows_by_pk?: Maybe<User_Shows>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Show_SourcesArgs = {
  where: Show_Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Show_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ShowsArgs = {
  where: Shows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shows_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SourcesArgs = {
  where: Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_ShowsArgs = {
  where: User_Shows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Shows_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Show_SourcesArgs = {
  objects: Array<Show_Sources_Insert_Input>;
  on_conflict?: InputMaybe<Show_Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Show_Sources_OneArgs = {
  object: Show_Sources_Insert_Input;
  on_conflict?: InputMaybe<Show_Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShowsArgs = {
  objects: Array<Shows_Insert_Input>;
  on_conflict?: InputMaybe<Shows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shows_OneArgs = {
  object: Shows_Insert_Input;
  on_conflict?: InputMaybe<Shows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SourcesArgs = {
  objects: Array<Sources_Insert_Input>;
  on_conflict?: InputMaybe<Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sources_OneArgs = {
  object: Sources_Insert_Input;
  on_conflict?: InputMaybe<Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ShowsArgs = {
  objects: Array<User_Shows_Insert_Input>;
  on_conflict?: InputMaybe<User_Shows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Shows_OneArgs = {
  object: User_Shows_Insert_Input;
  on_conflict?: InputMaybe<User_Shows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Show_SourcesArgs = {
  _inc?: InputMaybe<Show_Sources_Inc_Input>;
  _set?: InputMaybe<Show_Sources_Set_Input>;
  where: Show_Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Show_Sources_By_PkArgs = {
  _inc?: InputMaybe<Show_Sources_Inc_Input>;
  _set?: InputMaybe<Show_Sources_Set_Input>;
  pk_columns: Show_Sources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ShowsArgs = {
  _inc?: InputMaybe<Shows_Inc_Input>;
  _set?: InputMaybe<Shows_Set_Input>;
  where: Shows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shows_By_PkArgs = {
  _inc?: InputMaybe<Shows_Inc_Input>;
  _set?: InputMaybe<Shows_Set_Input>;
  pk_columns: Shows_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SourcesArgs = {
  _inc?: InputMaybe<Sources_Inc_Input>;
  _set?: InputMaybe<Sources_Set_Input>;
  where: Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sources_By_PkArgs = {
  _inc?: InputMaybe<Sources_Inc_Input>;
  _set?: InputMaybe<Sources_Set_Input>;
  pk_columns: Sources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ShowsArgs = {
  _inc?: InputMaybe<User_Shows_Inc_Input>;
  _set?: InputMaybe<User_Shows_Set_Input>;
  where: User_Shows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Shows_By_PkArgs = {
  _inc?: InputMaybe<User_Shows_Inc_Input>;
  _set?: InputMaybe<User_Shows_Set_Input>;
  pk_columns: User_Shows_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "show_sources" */
  show_sources: Array<Show_Sources>;
  /** fetch aggregated fields from the table: "show_sources" */
  show_sources_aggregate: Show_Sources_Aggregate;
  /** fetch data from the table: "show_sources" using primary key columns */
  show_sources_by_pk?: Maybe<Show_Sources>;
  /** fetch data from the table: "shows" */
  shows: Array<Shows>;
  /** fetch aggregated fields from the table: "shows" */
  shows_aggregate: Shows_Aggregate;
  /** fetch data from the table: "shows" using primary key columns */
  shows_by_pk?: Maybe<Shows>;
  /** fetch data from the table: "sources" */
  sources: Array<Sources>;
  /** fetch aggregated fields from the table: "sources" */
  sources_aggregate: Sources_Aggregate;
  /** fetch data from the table: "sources" using primary key columns */
  sources_by_pk?: Maybe<Sources>;
  /** fetch data from the table: "user_shows" */
  user_shows: Array<User_Shows>;
  /** fetch aggregated fields from the table: "user_shows" */
  user_shows_aggregate: User_Shows_Aggregate;
  /** fetch data from the table: "user_shows" using primary key columns */
  user_shows_by_pk?: Maybe<User_Shows>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootShow_SourcesArgs = {
  distinct_on?: InputMaybe<Array<Show_Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Show_Sources_Order_By>>;
  where?: InputMaybe<Show_Sources_Bool_Exp>;
};


export type Query_RootShow_Sources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Show_Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Show_Sources_Order_By>>;
  where?: InputMaybe<Show_Sources_Bool_Exp>;
};


export type Query_RootShow_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootShowsArgs = {
  distinct_on?: InputMaybe<Array<Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shows_Order_By>>;
  where?: InputMaybe<Shows_Bool_Exp>;
};


export type Query_RootShows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shows_Order_By>>;
  where?: InputMaybe<Shows_Bool_Exp>;
};


export type Query_RootShows_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSourcesArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Query_RootSources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Query_RootSources_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_ShowsArgs = {
  distinct_on?: InputMaybe<Array<User_Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Shows_Order_By>>;
  where?: InputMaybe<User_Shows_Bool_Exp>;
};


export type Query_RootUser_Shows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Shows_Order_By>>;
  where?: InputMaybe<User_Shows_Bool_Exp>;
};


export type Query_RootUser_Shows_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "show_sources" */
export type Show_Sources = {
  __typename?: 'show_sources';
  id: Scalars['Int'];
  /** An object relationship */
  show: Shows;
  show_id: Scalars['Int'];
  /** An object relationship */
  source: Sources;
  source_id: Scalars['Int'];
};

/** aggregated selection of "show_sources" */
export type Show_Sources_Aggregate = {
  __typename?: 'show_sources_aggregate';
  aggregate?: Maybe<Show_Sources_Aggregate_Fields>;
  nodes: Array<Show_Sources>;
};

/** aggregate fields of "show_sources" */
export type Show_Sources_Aggregate_Fields = {
  __typename?: 'show_sources_aggregate_fields';
  avg?: Maybe<Show_Sources_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Show_Sources_Max_Fields>;
  min?: Maybe<Show_Sources_Min_Fields>;
  stddev?: Maybe<Show_Sources_Stddev_Fields>;
  stddev_pop?: Maybe<Show_Sources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Show_Sources_Stddev_Samp_Fields>;
  sum?: Maybe<Show_Sources_Sum_Fields>;
  var_pop?: Maybe<Show_Sources_Var_Pop_Fields>;
  var_samp?: Maybe<Show_Sources_Var_Samp_Fields>;
  variance?: Maybe<Show_Sources_Variance_Fields>;
};


/** aggregate fields of "show_sources" */
export type Show_Sources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Show_Sources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Show_Sources_Avg_Fields = {
  __typename?: 'show_sources_avg_fields';
  id?: Maybe<Scalars['Float']>;
  show_id?: Maybe<Scalars['Float']>;
  source_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "show_sources". All fields are combined with a logical 'AND'. */
export type Show_Sources_Bool_Exp = {
  _and?: InputMaybe<Array<Show_Sources_Bool_Exp>>;
  _not?: InputMaybe<Show_Sources_Bool_Exp>;
  _or?: InputMaybe<Array<Show_Sources_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  show?: InputMaybe<Shows_Bool_Exp>;
  show_id?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<Sources_Bool_Exp>;
  source_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "show_sources" */
export enum Show_Sources_Constraint {
  /** unique or primary key constraint */
  ShowSourcePkey = 'show_source_pkey',
  /** unique or primary key constraint */
  ShowSourceShowSourceKey = 'show_source_show_source_key'
}

/** input type for incrementing numeric columns in table "show_sources" */
export type Show_Sources_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  show_id?: InputMaybe<Scalars['Int']>;
  source_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "show_sources" */
export type Show_Sources_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  show?: InputMaybe<Shows_Obj_Rel_Insert_Input>;
  show_id?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Sources_Obj_Rel_Insert_Input>;
  source_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Show_Sources_Max_Fields = {
  __typename?: 'show_sources_max_fields';
  id?: Maybe<Scalars['Int']>;
  show_id?: Maybe<Scalars['Int']>;
  source_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Show_Sources_Min_Fields = {
  __typename?: 'show_sources_min_fields';
  id?: Maybe<Scalars['Int']>;
  show_id?: Maybe<Scalars['Int']>;
  source_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "show_sources" */
export type Show_Sources_Mutation_Response = {
  __typename?: 'show_sources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Show_Sources>;
};

/** input type for inserting object relation for remote table "show_sources" */
export type Show_Sources_Obj_Rel_Insert_Input = {
  data: Show_Sources_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Show_Sources_On_Conflict>;
};

/** on_conflict condition type for table "show_sources" */
export type Show_Sources_On_Conflict = {
  constraint: Show_Sources_Constraint;
  update_columns?: Array<Show_Sources_Update_Column>;
  where?: InputMaybe<Show_Sources_Bool_Exp>;
};

/** Ordering options when selecting data from "show_sources". */
export type Show_Sources_Order_By = {
  id?: InputMaybe<Order_By>;
  show?: InputMaybe<Shows_Order_By>;
  show_id?: InputMaybe<Order_By>;
  source?: InputMaybe<Sources_Order_By>;
  source_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: show_sources */
export type Show_Sources_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "show_sources" */
export enum Show_Sources_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  SourceId = 'source_id'
}

/** input type for updating data in table "show_sources" */
export type Show_Sources_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  show_id?: InputMaybe<Scalars['Int']>;
  source_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Show_Sources_Stddev_Fields = {
  __typename?: 'show_sources_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  show_id?: Maybe<Scalars['Float']>;
  source_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Show_Sources_Stddev_Pop_Fields = {
  __typename?: 'show_sources_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  show_id?: Maybe<Scalars['Float']>;
  source_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Show_Sources_Stddev_Samp_Fields = {
  __typename?: 'show_sources_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  show_id?: Maybe<Scalars['Float']>;
  source_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Show_Sources_Sum_Fields = {
  __typename?: 'show_sources_sum_fields';
  id?: Maybe<Scalars['Int']>;
  show_id?: Maybe<Scalars['Int']>;
  source_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "show_sources" */
export enum Show_Sources_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ShowId = 'show_id',
  /** column name */
  SourceId = 'source_id'
}

/** aggregate var_pop on columns */
export type Show_Sources_Var_Pop_Fields = {
  __typename?: 'show_sources_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  show_id?: Maybe<Scalars['Float']>;
  source_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Show_Sources_Var_Samp_Fields = {
  __typename?: 'show_sources_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  show_id?: Maybe<Scalars['Float']>;
  source_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Show_Sources_Variance_Fields = {
  __typename?: 'show_sources_variance_fields';
  id?: Maybe<Scalars['Float']>;
  show_id?: Maybe<Scalars['Float']>;
  source_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "shows" */
export type Shows = {
  __typename?: 'shows';
  episode_count?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

/** aggregated selection of "shows" */
export type Shows_Aggregate = {
  __typename?: 'shows_aggregate';
  aggregate?: Maybe<Shows_Aggregate_Fields>;
  nodes: Array<Shows>;
};

/** aggregate fields of "shows" */
export type Shows_Aggregate_Fields = {
  __typename?: 'shows_aggregate_fields';
  avg?: Maybe<Shows_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Shows_Max_Fields>;
  min?: Maybe<Shows_Min_Fields>;
  stddev?: Maybe<Shows_Stddev_Fields>;
  stddev_pop?: Maybe<Shows_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shows_Stddev_Samp_Fields>;
  sum?: Maybe<Shows_Sum_Fields>;
  var_pop?: Maybe<Shows_Var_Pop_Fields>;
  var_samp?: Maybe<Shows_Var_Samp_Fields>;
  variance?: Maybe<Shows_Variance_Fields>;
};


/** aggregate fields of "shows" */
export type Shows_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Shows_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Shows_Avg_Fields = {
  __typename?: 'shows_avg_fields';
  episode_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "shows". All fields are combined with a logical 'AND'. */
export type Shows_Bool_Exp = {
  _and?: InputMaybe<Array<Shows_Bool_Exp>>;
  _not?: InputMaybe<Shows_Bool_Exp>;
  _or?: InputMaybe<Array<Shows_Bool_Exp>>;
  episode_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "shows" */
export enum Shows_Constraint {
  /** unique or primary key constraint */
  ShowsNameKey = 'shows_name_key',
  /** unique or primary key constraint */
  ShowsPkey = 'shows_pkey',
  /** unique or primary key constraint */
  ShowsSlugKey = 'shows_slug_key'
}

/** input type for incrementing numeric columns in table "shows" */
export type Shows_Inc_Input = {
  episode_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "shows" */
export type Shows_Insert_Input = {
  episode_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Shows_Max_Fields = {
  __typename?: 'shows_max_fields';
  episode_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Shows_Min_Fields = {
  __typename?: 'shows_min_fields';
  episode_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "shows" */
export type Shows_Mutation_Response = {
  __typename?: 'shows_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shows>;
};

/** input type for inserting object relation for remote table "shows" */
export type Shows_Obj_Rel_Insert_Input = {
  data: Shows_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Shows_On_Conflict>;
};

/** on_conflict condition type for table "shows" */
export type Shows_On_Conflict = {
  constraint: Shows_Constraint;
  update_columns?: Array<Shows_Update_Column>;
  where?: InputMaybe<Shows_Bool_Exp>;
};

/** Ordering options when selecting data from "shows". */
export type Shows_Order_By = {
  episode_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: shows */
export type Shows_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "shows" */
export enum Shows_Select_Column {
  /** column name */
  EpisodeCount = 'episode_count',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "shows" */
export type Shows_Set_Input = {
  episode_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Shows_Stddev_Fields = {
  __typename?: 'shows_stddev_fields';
  episode_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Shows_Stddev_Pop_Fields = {
  __typename?: 'shows_stddev_pop_fields';
  episode_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Shows_Stddev_Samp_Fields = {
  __typename?: 'shows_stddev_samp_fields';
  episode_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Shows_Sum_Fields = {
  __typename?: 'shows_sum_fields';
  episode_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "shows" */
export enum Shows_Update_Column {
  /** column name */
  EpisodeCount = 'episode_count',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** aggregate var_pop on columns */
export type Shows_Var_Pop_Fields = {
  __typename?: 'shows_var_pop_fields';
  episode_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Shows_Var_Samp_Fields = {
  __typename?: 'shows_var_samp_fields';
  episode_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Shows_Variance_Fields = {
  __typename?: 'shows_variance_fields';
  episode_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "sources" */
export type Sources = {
  __typename?: 'sources';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "sources" */
export type Sources_Aggregate = {
  __typename?: 'sources_aggregate';
  aggregate?: Maybe<Sources_Aggregate_Fields>;
  nodes: Array<Sources>;
};

/** aggregate fields of "sources" */
export type Sources_Aggregate_Fields = {
  __typename?: 'sources_aggregate_fields';
  avg?: Maybe<Sources_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sources_Max_Fields>;
  min?: Maybe<Sources_Min_Fields>;
  stddev?: Maybe<Sources_Stddev_Fields>;
  stddev_pop?: Maybe<Sources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sources_Stddev_Samp_Fields>;
  sum?: Maybe<Sources_Sum_Fields>;
  var_pop?: Maybe<Sources_Var_Pop_Fields>;
  var_samp?: Maybe<Sources_Var_Samp_Fields>;
  variance?: Maybe<Sources_Variance_Fields>;
};


/** aggregate fields of "sources" */
export type Sources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Sources_Avg_Fields = {
  __typename?: 'sources_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "sources". All fields are combined with a logical 'AND'. */
export type Sources_Bool_Exp = {
  _and?: InputMaybe<Array<Sources_Bool_Exp>>;
  _not?: InputMaybe<Sources_Bool_Exp>;
  _or?: InputMaybe<Array<Sources_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sources" */
export enum Sources_Constraint {
  /** unique or primary key constraint */
  SourcesNameKey = 'sources_name_key',
  /** unique or primary key constraint */
  SourcesPkey = 'sources_pkey'
}

/** input type for incrementing numeric columns in table "sources" */
export type Sources_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "sources" */
export type Sources_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sources_Max_Fields = {
  __typename?: 'sources_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Sources_Min_Fields = {
  __typename?: 'sources_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "sources" */
export type Sources_Mutation_Response = {
  __typename?: 'sources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sources>;
};

/** input type for inserting object relation for remote table "sources" */
export type Sources_Obj_Rel_Insert_Input = {
  data: Sources_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Sources_On_Conflict>;
};

/** on_conflict condition type for table "sources" */
export type Sources_On_Conflict = {
  constraint: Sources_Constraint;
  update_columns?: Array<Sources_Update_Column>;
  where?: InputMaybe<Sources_Bool_Exp>;
};

/** Ordering options when selecting data from "sources". */
export type Sources_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sources */
export type Sources_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "sources" */
export enum Sources_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "sources" */
export type Sources_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Sources_Stddev_Fields = {
  __typename?: 'sources_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Sources_Stddev_Pop_Fields = {
  __typename?: 'sources_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Sources_Stddev_Samp_Fields = {
  __typename?: 'sources_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Sources_Sum_Fields = {
  __typename?: 'sources_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "sources" */
export enum Sources_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Sources_Var_Pop_Fields = {
  __typename?: 'sources_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Sources_Var_Samp_Fields = {
  __typename?: 'sources_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Sources_Variance_Fields = {
  __typename?: 'sources_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "show_sources" */
  show_sources: Array<Show_Sources>;
  /** fetch aggregated fields from the table: "show_sources" */
  show_sources_aggregate: Show_Sources_Aggregate;
  /** fetch data from the table: "show_sources" using primary key columns */
  show_sources_by_pk?: Maybe<Show_Sources>;
  /** fetch data from the table: "shows" */
  shows: Array<Shows>;
  /** fetch aggregated fields from the table: "shows" */
  shows_aggregate: Shows_Aggregate;
  /** fetch data from the table: "shows" using primary key columns */
  shows_by_pk?: Maybe<Shows>;
  /** fetch data from the table: "sources" */
  sources: Array<Sources>;
  /** fetch aggregated fields from the table: "sources" */
  sources_aggregate: Sources_Aggregate;
  /** fetch data from the table: "sources" using primary key columns */
  sources_by_pk?: Maybe<Sources>;
  /** fetch data from the table: "user_shows" */
  user_shows: Array<User_Shows>;
  /** fetch aggregated fields from the table: "user_shows" */
  user_shows_aggregate: User_Shows_Aggregate;
  /** fetch data from the table: "user_shows" using primary key columns */
  user_shows_by_pk?: Maybe<User_Shows>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootShow_SourcesArgs = {
  distinct_on?: InputMaybe<Array<Show_Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Show_Sources_Order_By>>;
  where?: InputMaybe<Show_Sources_Bool_Exp>;
};


export type Subscription_RootShow_Sources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Show_Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Show_Sources_Order_By>>;
  where?: InputMaybe<Show_Sources_Bool_Exp>;
};


export type Subscription_RootShow_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootShowsArgs = {
  distinct_on?: InputMaybe<Array<Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shows_Order_By>>;
  where?: InputMaybe<Shows_Bool_Exp>;
};


export type Subscription_RootShows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shows_Order_By>>;
  where?: InputMaybe<Shows_Bool_Exp>;
};


export type Subscription_RootShows_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSourcesArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Subscription_RootSources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Subscription_RootSources_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_ShowsArgs = {
  distinct_on?: InputMaybe<Array<User_Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Shows_Order_By>>;
  where?: InputMaybe<User_Shows_Bool_Exp>;
};


export type Subscription_RootUser_Shows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Shows_Order_By>>;
  where?: InputMaybe<User_Shows_Bool_Exp>;
};


export type Subscription_RootUser_Shows_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_shows" */
export type User_Shows = {
  __typename?: 'user_shows';
  id: Scalars['Int'];
  /** An object relationship */
  show_source: Show_Sources;
  show_source_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** aggregated selection of "user_shows" */
export type User_Shows_Aggregate = {
  __typename?: 'user_shows_aggregate';
  aggregate?: Maybe<User_Shows_Aggregate_Fields>;
  nodes: Array<User_Shows>;
};

/** aggregate fields of "user_shows" */
export type User_Shows_Aggregate_Fields = {
  __typename?: 'user_shows_aggregate_fields';
  avg?: Maybe<User_Shows_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Shows_Max_Fields>;
  min?: Maybe<User_Shows_Min_Fields>;
  stddev?: Maybe<User_Shows_Stddev_Fields>;
  stddev_pop?: Maybe<User_Shows_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Shows_Stddev_Samp_Fields>;
  sum?: Maybe<User_Shows_Sum_Fields>;
  var_pop?: Maybe<User_Shows_Var_Pop_Fields>;
  var_samp?: Maybe<User_Shows_Var_Samp_Fields>;
  variance?: Maybe<User_Shows_Variance_Fields>;
};


/** aggregate fields of "user_shows" */
export type User_Shows_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Shows_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_shows" */
export type User_Shows_Aggregate_Order_By = {
  avg?: InputMaybe<User_Shows_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Shows_Max_Order_By>;
  min?: InputMaybe<User_Shows_Min_Order_By>;
  stddev?: InputMaybe<User_Shows_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Shows_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Shows_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Shows_Sum_Order_By>;
  var_pop?: InputMaybe<User_Shows_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Shows_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Shows_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_shows" */
export type User_Shows_Arr_Rel_Insert_Input = {
  data: Array<User_Shows_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Shows_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Shows_Avg_Fields = {
  __typename?: 'user_shows_avg_fields';
  id?: Maybe<Scalars['Float']>;
  show_source_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_shows" */
export type User_Shows_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_shows". All fields are combined with a logical 'AND'. */
export type User_Shows_Bool_Exp = {
  _and?: InputMaybe<Array<User_Shows_Bool_Exp>>;
  _not?: InputMaybe<User_Shows_Bool_Exp>;
  _or?: InputMaybe<Array<User_Shows_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  show_source?: InputMaybe<Show_Sources_Bool_Exp>;
  show_source_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_shows" */
export enum User_Shows_Constraint {
  /** unique or primary key constraint */
  UserShowsPkey = 'user_shows_pkey',
  /** unique or primary key constraint */
  UserShowsShowSourceIdUserIdKey = 'user_shows_show_source_id_user_id_key'
}

/** input type for incrementing numeric columns in table "user_shows" */
export type User_Shows_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  show_source_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_shows" */
export type User_Shows_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  show_source?: InputMaybe<Show_Sources_Obj_Rel_Insert_Input>;
  show_source_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Shows_Max_Fields = {
  __typename?: 'user_shows_max_fields';
  id?: Maybe<Scalars['Int']>;
  show_source_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_shows" */
export type User_Shows_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Shows_Min_Fields = {
  __typename?: 'user_shows_min_fields';
  id?: Maybe<Scalars['Int']>;
  show_source_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_shows" */
export type User_Shows_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_shows" */
export type User_Shows_Mutation_Response = {
  __typename?: 'user_shows_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Shows>;
};

/** on_conflict condition type for table "user_shows" */
export type User_Shows_On_Conflict = {
  constraint: User_Shows_Constraint;
  update_columns?: Array<User_Shows_Update_Column>;
  where?: InputMaybe<User_Shows_Bool_Exp>;
};

/** Ordering options when selecting data from "user_shows". */
export type User_Shows_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source?: InputMaybe<Show_Sources_Order_By>;
  show_source_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_shows */
export type User_Shows_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_shows" */
export enum User_Shows_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ShowSourceId = 'show_source_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_shows" */
export type User_Shows_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  show_source_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Shows_Stddev_Fields = {
  __typename?: 'user_shows_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  show_source_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_shows" */
export type User_Shows_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Shows_Stddev_Pop_Fields = {
  __typename?: 'user_shows_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  show_source_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_shows" */
export type User_Shows_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Shows_Stddev_Samp_Fields = {
  __typename?: 'user_shows_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  show_source_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_shows" */
export type User_Shows_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Shows_Sum_Fields = {
  __typename?: 'user_shows_sum_fields';
  id?: Maybe<Scalars['Int']>;
  show_source_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_shows" */
export type User_Shows_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_shows" */
export enum User_Shows_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ShowSourceId = 'show_source_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Shows_Var_Pop_Fields = {
  __typename?: 'user_shows_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  show_source_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_shows" */
export type User_Shows_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Shows_Var_Samp_Fields = {
  __typename?: 'user_shows_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  show_source_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_shows" */
export type User_Shows_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Shows_Variance_Fields = {
  __typename?: 'user_shows_variance_fields';
  id?: Maybe<Scalars['Float']>;
  show_source_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_shows" */
export type User_Shows_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  show_source_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamp'];
  email: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** fetch data from the table: "user_shows" */
  user_shows: Array<User_Shows>;
  /** fetch aggregated fields from the table: "user_shows" */
  user_shows_aggregate: User_Shows_Aggregate;
};


/** columns and relationships of "users" */
export type UsersUser_ShowsArgs = {
  distinct_on?: InputMaybe<Array<User_Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Shows_Order_By>>;
  where?: InputMaybe<User_Shows_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Shows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Shows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Shows_Order_By>>;
  where?: InputMaybe<User_Shows_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_shows?: InputMaybe<User_Shows_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_shows?: InputMaybe<User_Shows_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_shows_aggregate?: InputMaybe<User_Shows_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, email: string } | null };


export const GetUserDocument = gql`
    query getUser($id: String!) {
  users_by_pk(id: $id) {
    id
    email
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUser(variables: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;