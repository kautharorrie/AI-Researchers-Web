package com.AI_WEB_APP.AIWEB;


import com.AI_WEB_APP.AIWEB.model.Researcher;
import com.AI_WEB_APP.AIWEB.resporitory.ResearcherRepo;
import com.AI_WEB_APP.AIWEB.service.ResearcherService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ResearchServiceTests {
    @Mock
    private ResearcherRepo researcherRepo;

    @InjectMocks
    ResearcherService researcherService;

    Date sDate = new Date();
    @BeforeEach
    void initUseCase(){
        researcherService = new ResearcherService(researcherRepo);
    }

    @Test
    public void savedResearcher_Success(){
        Researcher researcher = new Researcher("surname", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        when(researcherRepo.save(any(Researcher.class))).thenReturn(researcher);

        Researcher savedResearcher = researcherRepo.save(researcher);
        assertThat(savedResearcher.getInstitution()).isNotNull();

    }

    @Test
    public void researcher_exists_in_db(){
        Researcher researcher = new Researcher("surname", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);

        when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.returnResearcher();
        assertThat(fetchedResearchers.size()).isGreaterThan(0);
    }

    @Test
    public void find_researcher_in_db_test(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }

    @Test
    public void test_institution_count(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }


    @Test
    public void test_primary_field_count(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }


    @Test
    public void test_secondary_field_count(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }


    @Test
    public void test_rating_per_institution(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }

    @Test
    public void test_find_specialisations(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }

    @Test
    public void test_total_number_of_publications(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }


    @Test
    public void test_total_researchers_per_year(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }


    @Test
    public void test_specialisations_count(){
        Researcher researcher = new Researcher("kauthar", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher1 = new Researcher("surnam", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");
        Researcher researcher2 = new Researcher("surna", "initials", "title", "institution", "rating", sDate, sDate,
                "primary", "secondary", "specialisations");


        List<Researcher> researcherList = new ArrayList<>();
        researcherList.add(researcher);
        researcherList.add(researcher1);
        researcherList.add(researcher2);

        lenient().when(researcherRepo.findAll()).thenReturn(researcherList);
        List<Researcher> fetchedResearchers = researcherService.findSurname("kauthar");
        assertThat(fetchedResearchers.size()).isGreaterThan(-1);
    }
}
